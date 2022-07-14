import * as React from 'react'

export default class Title extends React.Component{
    public render() {
        return(
            <h2 {...this.props} className='text-[#555] font-semibold text-4xl mb-3'/>
        )
    }
}