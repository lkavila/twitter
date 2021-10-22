const Spinner = ({ size }) =>
    <div className=" flex justify-center items-center">
        <div className={`animate-spin rounded-full h-${size} w-${size} border-b-2 border-blueTwitter`}></div>
    </div>
export default Spinner;