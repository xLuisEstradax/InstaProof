import * as React from 'react'

const style = {
    height: 'calc(100vh - 20px)',
    weight: 'calc(100vw - 32px)'
}

type MyState = { children: any };

export default class Container extends React.Component< MyState>{
    public render() {
        const { children } = this.props
        return(
            <div className='bg-[#eee]  px-2.5 py-4 flex justify-center items-center ' style={style} >
                {children}
            </div>
        )
    }
}