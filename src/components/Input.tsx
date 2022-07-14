import * as React from 'react'

interface IInputProps  {
  placeholder?:string,
  Label: string,
}

export default class Input extends React.Component<IInputProps>{
    public render() {
      const {Label} = this.props
        return(
          <div>
            <span className='uppercase text-[#777] font-black text-xs'>{Label}</span>
            <input className='bg-white border-2 border-[#ddd] px-2.5 py-3 rounded w-full mb-2.5' {...this.props}/>
          </div>
        )
    }
}