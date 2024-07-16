import React, { useState } from 'react'
import './CustomInput.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
const CustomInput = ({ ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="inputWrapp">
                <div className='inputWrapp__container'>
                    {props.icon &&
                        <div className="inputWrapp__container__icon">
                            {props.icon}
                        </div>
                    }

                    <input
                        type={showPassword ? 'text' : props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        name={props.name}
                    />
                    {
                        props.type === 'password' && (
                            <div className="inputWrapp__container__icon" onClick={handleTogglePassword}>
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}


export default CustomInput 