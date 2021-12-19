import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { fetchActiveQuestAction } from '../../store/api-actions';
import { getActiveQuest, getIsActiveQuestLoaded } from '../../store/data/selectors';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import Loading from '../loading/loading';
import { AppRoute } from '../../const';
import { humanizeLevel, humanizeType } from '../../utils';

const mapStateToProps = (state) => ({
  activeQuest: getActiveQuest(state),
  isActiveQuestLoaded: getIsActiveQuestLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchActiveQuest(id) {
    dispatch(fetchActiveQuestAction(id));
  }
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const DetailedQuest = (props) => {
  const {activeQuest, isActiveQuestLoaded, fetchActiveQuest} = props;
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const params = useParams();
  const currentId = Number(params.id);

  useEffect(() => fetchActiveQuest(currentId), [currentId, fetchActiveQuest]);

  if (!isActiveQuestLoaded) {
    return (
      <Loading/>
    );
  }

  if(activeQuest === null) {
    return (<Redirect to={AppRoute.NotFound}/>);
  }

  const {coverImg, title, type, duration, peopleCount, level, description} = activeQuest;
  const russianLevel = humanizeLevel(level);
  const russianType = humanizeType(type);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{russianType}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount[0]}–{peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{russianLevel}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onClick={onBookingBtnClick}/>}
      </S.Main>
    </MainLayout>
  );
};

export default connector(DetailedQuest);
