import Link from 'next/link';

export default function Questionnaire() {
    return (
        <>
            <div className='min-h-screen'>
                <div
                    className='pt-12 px-4 pb-20 md:p-16 md:pb-36 bg-gradient-to-r from-[#041024] via-midnight-blue to-[#041024]'
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
                    }}>
                    <div
                        className='flex flex-col max-w-4xl mx-auto space-y-8'
                    >
                        <div className='flex flex-col'>
                            <span className='text-blue-darknut'>
                                Módulo
                            </span>
                            <h1 className='text-4xl md:text-6xl text-blue-darknut font-bold mb-4'>
                                Conhecimentos Gerais
                            </h1>
                            <p className='text-zinc-300 mb-6'>
                                Este questionário foi desenvolvido para avaliar seus conhecimentos em diversas áreas, como ciência, história e cultura geral.
                                Reserve um tempo tranquilo para respondê-lo e aproveite para aprender algo novo!
                            </p>
                        </div>

                        <div className='flex w-max h-max space-x-2 mx-auto items-center md:px-4 md:py-2 bg-gunmetal rounded-md border border-vivid-cerulean'                       >
                            <a>
                                Número de Questões
                            </a>
                            <div className='w-[1px] h-12 bg-zinc-500'></div>
                            <a>
                                Tempo Estimado
                            </a>
                            <div className='hidden md:block w-[1px] h-12 bg-zinc-500'></div>
                            <Link
                                href='/questionnaire/x/1'
                                className='hidden md:block w-fit md:px-4 md:py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600'>
                                Iniciar Questionário
                            </Link>
                        </div>


                        <Link
                            href='/questionnaire/x/1'
                            className='md:hidden mx-auto w-fit px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600'>
                            Iniciar Questionário
                        </Link>
                    </div>
                </div>
                <div className='p-12 max-w-4xl mx-auto'>
                    <h1 className='text-2xl'>
                        Conheça nossos outros questionários:
                    </h1>
                </div>
            </div >
        </>
    );
}