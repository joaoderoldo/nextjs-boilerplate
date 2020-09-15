import * as S from './styles'

function Main({
  title = 'React Avançado',
  description = 'TypeScript, React, NextJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor sentado olhando para o computador"
      />
    </S.Wrapper>
  )
}

export default Main
