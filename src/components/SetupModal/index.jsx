import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Logo, Avatar } from '../'

const SetUpModal = ({ open, setOpen }) => {
    const cancelButtonRef = useRef(null)

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-center justify-center h-full">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-100"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all flex max-w-xl w-104 md:h-5/6">
                                <div className="bg-white px-4 pt-5 pb-4 min-w-full h-5/6">
                                    <div className="flex flex-col">
                                        <div className="flex justify-center">
                                            <Logo className="h-7 w-7 ml-2.5" />
                                        </div>
                                        <div className="mt-6 text-left ">
                                            <div className="text-2xl leading-6 font-bold">
                                                Pick a profile picture
                                            </div>
                                            <div className="mt-4 mb-6">
                                                <p className="text-sm text-grey">
                                                    Have a favorite selfie? Upload it now.
                                                </p>
                                            </div>
                                            <div className="w-full flex justify-center p-4 mb-20">
                                                <Avatar className="w-2/4 h-2/4" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-4 py-3">
                                        <button
                                            type="button"
                                            className="mt-3 w-full justify-center rounded-full py-2 bg-white text-blueTwitter font-bold hover:bg-blueTwitter-lighter"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Skip for now
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );

}

export default SetUpModal;
