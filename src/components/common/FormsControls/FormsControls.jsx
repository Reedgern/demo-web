import React from "react";
import s from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const isError = meta.error && meta.touched;
    return (
        <div className={s.formControl + ' ' + (isError ? s.error: '')}>
            <textarea {...input} {...props} />
            <div>
                {isError ?
                    <span>{meta.error}</span> :
                    null}
            </div>
        </div>
    );
};

export const Input = ({input, meta, ...props}) => {
    const isError = meta.error && meta.touched;
    return (
        <div className={s.formControl + ' ' + (isError ? s.error: '')}>
            <input {...input} {...props} />
            <div>
                {isError ?
                    <span>{meta.error}</span> :
                    null}
            </div>
        </div>
    );
};