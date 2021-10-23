
import { Logo, Avatar, Modal } from '../'

const SetUpModal = ({ open, setOpen }) => {

    return (
        <>
            <Modal open={open} setOpen={setOpen} >
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
                    >
                        Skip for now
                    </button>
                </div>
            </Modal>
        </>
    );

}

export default SetUpModal;
