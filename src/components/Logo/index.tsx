interface Props {
  className: string
}

export function Logo({ className }: Props) {
  return (
    <h1 className={className}><strong>tsb.news</strong></h1>
  )
}