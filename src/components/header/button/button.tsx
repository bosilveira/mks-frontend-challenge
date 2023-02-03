import React from 'react';

export interface ButtonProps {
    className?: string;
    children: JSX.Element,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    title?: string
}
  
export class Button extends React.Component<ButtonProps, {}> {
    render() {
        return (
            <button type='button' className={this.props.className} onClick={this.props.onClick} title={this.props.title}>
                {this.props.children}
            </button>
        );
    }
}
