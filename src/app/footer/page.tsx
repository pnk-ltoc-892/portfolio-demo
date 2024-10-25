
import ContactSection from '@/components/finalized/components/ContactSection.tsx'
import { LinkPreview } from '@/components/finalized/ui/link-preview.tsx'
import React from 'react'

const page = () => {
    return (
        <main>
            <ContactSection />
            <div className='mt-18 border-t border-t-white bg-black w-full py-8'>
            <p className="text-white tracking-wide font-semibold text-center text-3xl ">
                    Build With <span>❤️</span> By Pankaj Singh
                </p>
                <p className="text-white tracking-wide text-xl text-center py-2">
                    Build With {" "}
                    <LinkPreview url="https://ui.aceternity.com/" className="font-bold text-purple-900">
                        <span className='text-purple-600'>Aceternity UI</span> 
                    </LinkPreview>{" "}
                </p>
            </div>
        </main>
    )
}

export default page