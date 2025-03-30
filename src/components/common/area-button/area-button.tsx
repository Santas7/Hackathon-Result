import { IAreaButtonProps } from '../../../core/types/for-common'

export const AreaButton = ({ buttonText, onClick }: IAreaButtonProps) => {
  return <button onClick={() => {onClick(); console.log('click')}}>{buttonText}</button>
}
