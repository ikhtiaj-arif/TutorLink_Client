import { Button } from '@/components/ui/button';
import TLContainer from '@/components/ui/core/TLContainer';
import { ArrowBigRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const JoinCommunity = () => {
    return (
        <TLContainer className='pt-32'>

        <div className='max-w-6xl mx-auto flex flex-col bg-blue-100 p-12 rounded-2xl items-center justify-center gap-4'>
            <h2  className="text-3xl font-bold text-left text-gray-900">Join our community of enthusiasts</h2>
            <h4>Build a strong foundation with specialized classes</h4>
            <Link href={'/tutors'}>
                        <Button variant='default' className="text-md font-[600]  px-8 py-3 rounded-full">See more tutors <ArrowBigRightIcon /> </Button>
                    </Link>
        </div>
        </TLContainer>
    );
};

export default JoinCommunity;