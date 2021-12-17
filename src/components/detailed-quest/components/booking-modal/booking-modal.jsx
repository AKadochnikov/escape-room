import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { updatePostOrderStatus } from '../../../../store/actions';
import { POST_ORDER_STATUS } from '../../../../const';
import { postOrderAction } from '../../../../store/api-actions';
import { getPostOrderStatus } from '../../../../store/data/selectors';
import { connect } from 'react-redux';
import { useEffect, useRef } from 'react';
import { checkTelValidation } from '../../../../utils';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(postData){
    dispatch(updatePostOrderStatus(POST_ORDER_STATUS.posting));
    dispatch(postOrderAction(postData));
  },
  onSuccess(){
    dispatch(updatePostOrderStatus(POST_ORDER_STATUS.ready));
  },
});

const mapStateToProps = (state) => ({
  postOrderStatus: getPostOrderStatus(state),
})

const connector = connect(mapStateToProps, mapDispatchToProps);

const BookingModal = (props) => {
  const {onClick, postOrderStatus, onSubmit, onSuccess} = props;
  const nameRef = useRef(null);
  const telRef = useRef(null);
  const countRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const tel = telRef.current.value
    onSubmit({
      name: nameRef.current.value,
      peopleCount: Number(countRef.current.value),
      phone: tel.toString(),
      isLegal: true
    })
  }

  const handleTelInput = (evt) => {
    checkTelValidation(evt.target.value, evt.target);
  }

  let isPosting = false;

  if(postOrderStatus === POST_ORDER_STATUS.posting) {
    isPosting = true;
  }

  useEffect(() => {
    if(postOrderStatus === POST_ORDER_STATUS.success) {
      onSuccess();
      onClick();
    }
  }, [postOrderStatus, onClick, onSuccess])

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              disabled={isPosting}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={telRef}
              onInput={handleTelInput}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              disabled={isPosting}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              ref={countRef}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              disabled={isPosting}
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" disabled={isPosting}>{isPosting? 'Отправка...' : 'Отправить заявку'}</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              disabled={isPosting}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
};

export default connector(BookingModal);
