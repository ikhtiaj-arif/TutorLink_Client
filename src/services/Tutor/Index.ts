"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// get all products
export const getAllTutors = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutor?limit=10&page=${page}`,
      {
        next: {
          tags: ["TUTOR"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single product
export const getSingleProduct = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        next: {
          tags: ["TUTOR"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
// get single product
export const getTutorOwnInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tutor/my-profile`,

      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            (await cookies()).get("accessToken")!.value
          }`,
        },
        next: {
          tags: ["TUTOR"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// add Tutor
export const addTutor = async (tutorData: FormData): Promise<any> => {
 
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tutor`, {
      method: "POST",
      body: tutorData,
      headers: {
        Authorization:` Bearer ${(await cookies()).get("accessToken")!.value}`,
      },
    });
    if (!res.ok) {
      // If not, throw an error with the response status
      const errorData = await res.json();
      throw new Error(errorData?.message || "Failed to add tutor");
    }
    revalidateTag("TUTOR");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// // update product
// export const updateProduct = async (
//   productData: FormData,
//   productId: string
// ): Promise<any> => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
//       {
//         method: "PATCH",
//         body: productData,
//         headers: {
//           Authorization: (await cookies()).get("accessToken")!.value,
//         },
//       }
//     );
//     revalidateTag("PRODUCT");
//     return res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };
