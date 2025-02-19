'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from '@/assets/bg-app.png';
import grainImage from '@/assets/grain.jpg';
import valentinesImage from '@/assets/val.png';
import { AlertDialogTrigger, AlertDialog, AlertDialogContent, AlertDialogAction, AlertDialogCancel, AlertDialogDescription,AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';

const Home = () => {
    const router = useRouter();
    const [isLove, setIsLove] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        router.push('/valentines');
    };

    useEffect(() => {
        if (count >= 40) setIsLove(true);
    }, [count]);

    return (
        <>
        {
            !isLove &&
            <div className='relative flex justify-center items-center w-full h-screen bg-[#E2D5CA]'>
                <Image 
                  src={bgImage}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 -z-50"
                />
                <motion.div 
                    className='flex flex-col items-center text-[#C65060]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className='text-4xl font-semibold'>How much do you love me??</span>
                    <div className='flex gap-10 py-10 w-full justify-center'>
                        <motion.p 
                            className='text-2xl text-center font-semibold bg-[#651d27] px-4 rounded-full cursor-pointer' 
                            onClick={() => { setCount(count + 1) }}
                            whileTap={{ scale: 0.9 }}
                        >+</motion.p>
                        <motion.p 
                            className='text-2xl font-medium'
                            key={count}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {count}
                        </motion.p>
                        <motion.p 
                            className='text-2xl text-center font-semibold bg-[#651d27] px-4 rounded-full cursor-pointer' 
                            onClick={() => { setCount(count - 1) }}
                            whileTap={{ scale: 0.9 }}
                        >-</motion.p>
                    </div>
                </motion.div>
            </div>
        }
        <AnimatePresence>
            {isLove && (
                <motion.main 
                    className='flex flex-col bg-[#E2D5CA] h-screen'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image 
                      src={grainImage}
                      alt="Background Grain"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 -z-50"
                    />
                    <div className='text-[#C65060] flex flex-col justify-center items-center gap-10'>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Image 
                              src={valentinesImage}
                              alt="Valentines"
                              width={400}
                              height={400}
                              className='flex justify-center items-center pt-10'
                            />
                        </motion.div>
                        <div className='flex flex-row justify-center items-center gap-20'>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <motion.button 
                                        className='text-2xl border-2 rounded-xl px-4 py-2 border-[#4e414a8d]' 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Yesss💗
                                    </motion.button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently make you mine.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <motion.button 
                                        className='text-2xl border-2 rounded-xl px-4 py-2 border-[#4e414a8d]' 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Nooo🥹
                                    </motion.button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        you sure? you no love me? obv you don&apos;t love me you love someone else
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>I&apos;ll change your mind babe😂</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                </motion.main>
            )}
        </AnimatePresence>
        </>
    )
}

export default Home;
