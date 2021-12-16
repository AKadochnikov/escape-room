import * as S from './quest-card.styled';
import { ReactComponent as IconPerson } from '../../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../../assets/img/icon-puzzle.svg';
import { humanizeLevel } from '../../../../../utils';
import { APP_ROUTE } from '../../../../../const';

const QuestCard = (props) => {
  const {item} = props;
  const level = humanizeLevel(item);
  return (
    <S.QuestItem>
      <S.QuestItemLink to={`${APP_ROUTE.quest}/${item.id}`}>
        <S.Quest>
          <S.QuestImage
            src={item.coverImg}
            width="344"
            height="232"
            alt={`квест ${item.title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{item.title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${item.peopleCount[0]} - ${item.peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {level}                }
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  )
}

export default QuestCard;
