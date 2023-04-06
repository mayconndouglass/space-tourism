import * as S from './styles'

type titlePropsType = {
  number: string
  title: string
}

export const PageTitle = (titleProps: titlePropsType) => {
  
  return (
    <S.PageTitle>
        <h4>
          <span>{titleProps.number}</span> {titleProps.title.toUpperCase()}
        </h4>
    </S.PageTitle>
  )
}
