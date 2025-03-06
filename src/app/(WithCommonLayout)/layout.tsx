import Navbar from "@/components/shared/Navbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-20">

        {children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default CommonLayout;
