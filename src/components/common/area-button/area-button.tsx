import { IAreaButtonProps } from '../../../core/types/for-common'

export const AreaButton = ({ buttonText, onClick }: IAreaButtonProps) => {
  return <button onClick={() => onClick}>{buttonText}</button>
}
