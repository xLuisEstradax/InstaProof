import * as React from 'react'

const style = (block: boolean) => ({
    background: '#00D1B2',
    border: '0px',
    borderRadius: '4px',
    color: '#fff',
    padding: '10px 15px',
    marginBottom:'10px',
    width: block ? '100%' : undefined
})

interface IButtonProps {
    block?: boolean,
    children: React.ReactNode;
}

export default class Button extends React.Component<IButtonProps>{
    public render() {
      const {block = false} = this.props
        return(
            <button {...this.props} style={style(block)}/>
        )
    }
}