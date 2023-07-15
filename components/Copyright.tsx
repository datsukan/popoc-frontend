type Props = {
  dark?: boolean
}

export const Copyright = ({ dark }: Props) => {
  const textColorClassName = dark ? 'text-white' : 'text-popoc-black'

  return (
    <div>
      <span className={`font-bold ${textColorClassName}`}>© 2023 Popoc</span>
    </div>
  )
}
