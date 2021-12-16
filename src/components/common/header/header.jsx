import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { APP_ROUTE } from '../../../const';


const Header = (props) => {
  const {activeLink} = props;
  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
                <S.Link $isActiveLink={activeLink === APP_ROUTE.home? true: false} to={APP_ROUTE.home}>
                Квесты
                </S.Link>
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
                <S.Link $isActiveLink={activeLink === APP_ROUTE.contacts? true : false} to={APP_ROUTE.contacts}>
                  Контакты
                </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
