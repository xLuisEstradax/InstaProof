import * as React from 'react'
type MyState = { children: any };
export default class Card extends React.Component< MyState>{
    public render() {
        const { children } = this.props
        return(
            <div className='bg-white border-2 border-[#ddd] px-2.5 py-3 rounded-xl'>
                {children}
            </div>
        )
    }
}