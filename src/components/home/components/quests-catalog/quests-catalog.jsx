import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import { QUEST } from '../../../../const';
import QuestCard from './quest-card/quest-card';
import { getFilteredQuests, getQuestType } from '../../../../store/data/selectors';
import { connect } from 'react-redux';
import { changeQuestType } from '../../../../store/actions';


const mapDispatchToProps = (dispatch) => ({
  changeType(evt) {
    dispatch(changeQuestType(evt.currentTarget.dataset.type));
  }
});

const mapStateToProps = (state) => ({
  quests: getFilteredQuests(state),
  type: getQuestType(state),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const QuestsCatalog = (props) => {
  const {quests, type, changeType} = props;

  const activeTab = type;
  return (
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn isActive={activeTab === QUEST.all.name ? true : false} data-type={QUEST.all.name} onClick={changeType}>
            <IconAllQuests />
            <S.TabTitle>Все квесты</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === QUEST.adventures.name ? true : false} data-type={QUEST.adventures.name} onClick={changeType}>
            <IconAdventures />
            <S.TabTitle>Приключения</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === QUEST.horror.name ? true : false} data-type={QUEST.horror.name} onClick={changeType}>
            <IconHorrors />
            <S.TabTitle>Ужасы</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === QUEST.mystic.name ? true : false} data-type={QUEST.mystic.name} onClick={changeType}>
            <IconMystic />
            <S.TabTitle>Мистика</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === QUEST.detective.name ? true : false} data-type={QUEST.detective.name} onClick={changeType}>
            <IconDetective />
            <S.TabTitle>Детектив</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === QUEST.sciFi.name ? true : false} data-type={QUEST.sciFi.name} onClick={changeType}>
            <IconScifi />
            <S.TabTitle>Sci-fi</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        {quests.slice().map((item) => <QuestCard key={item.id} item={item}/>)}
      </S.QuestsList>
    </>
  );
}

export default connector(QuestsCatalog);
