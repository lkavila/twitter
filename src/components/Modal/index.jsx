import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Modal = ({ open, setOpen, children }) => {
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
                            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all flex max-w-xl w-104">
                                <div className="bg-white px-4 pt-5 pb-4 min-w-full">
                                    {children}
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );

}

export default Modal;
