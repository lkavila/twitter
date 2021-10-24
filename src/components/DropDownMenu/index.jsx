import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BsThreeDots } from 'react-icons/bs';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const MenuItem = (Icon, text, func, params, textColor, iconColor, index) => {

    const handleClick = () => {
        if (func !== undefined) {
            if (params !== undefined) {
                console.log(...params)
                func(...params);
            } else {
                func();
            }
        }
    }

    return (
        <Menu.Item key={index}>
            {({ active }) => (
                <div className="flex flex-row space-x-3 hover:bg-grey-lighter" onClick={handleClick}>
                    {Icon ? <Icon size={18} color={iconColor} className="mt-2 ml-2" /> : null}
                    <p
                        className={classNames(
                            active ? `bg-gray-100 text-gray-900 ${textColor}` : `text-gray-700 ${textColor}`,
                            'block py-2 text-sm '
                        )}
                    >
                        {text}
                    </p>
                </div>

            )}
        </Menu.Item>
    );
}

const DropDownMenu = ({ elements }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button >
                    <BsThreeDots></BsThreeDots>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="z-10 origin-top-right absolute right-0 -mt-6 -ml-2 w-80 max-w-xs rounded-md shadow-xl bg-white">
                    <div className="py-1">
                        {elements?.map((element, index) => {
                            return MenuItem(element.Icon, element.text, element.func, element.params, element.textColor, element.iconColor, index)
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default DropDownMenu;