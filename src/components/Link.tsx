import * as React from 'react'
export default class LinK extends React.Component{
    public render() {
        return(
            <a className='text-teal-500 text-sm p-3.5' {...this.props} />
        )
    }
}