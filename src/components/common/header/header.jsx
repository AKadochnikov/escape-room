import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { APP_ROUTE } from '../../../const';
import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState(APP_ROUTE.home)

  const handleActiveLink = (evt) => {
    const type = evt.target.dataset.type;
    console.log(type);
    setActiveLink(type);
  }

  console.log(activeLink);

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              {activeLink === APP_ROUTE.home?
                <S.Link $isActiveLink to={APP_ROUTE.home} data-type={APP_ROUTE.home} onClick={handleActiveLink}>
                Квесты
                </S.Link> :
                <S.Link to={APP_ROUTE.home} data-type={APP_ROUTE.home} onClick={handleActiveLink}>
                  Квесты
                </S.Link>
              }
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              {activeLink === APP_ROUTE.contacts?
                <S.Link $isActiveLink to={APP_ROUTE.contacts} data-type={APP_ROUTE.contacts} onClick={handleActiveLink}>
                  Контакты
                </S.Link> :
                <S.Link to={APP_ROUTE.contacts} data-type={APP_ROUTE.contacts} onClick={handleActiveLink}>
                  Контакты
                </S.Link>
              }
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
