import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { styles } from './style';
import { AppHeader } from 'components/Header/Header';
import { Card } from 'components/card/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { data } from 'json/Data'
import { getFavorite, storeFavorite } from 'cache/FavoriteCache';
import I18n from 'react-native-i18n';

interface Props {
  componentId: string;
  drawerRef: React.ReactNode
}

export const Favourite: NavigationFunctionComponent<Props> = (props: Props) => {

  const [favIDs, setFavIDs] = useState<number[] | null>([])
  const getFavoriteIDs = async () => {
    const data = await getFavorite();
    setFavIDs(data)
  }
  useEffect(() => {
    getFavoriteIDs();
  }, [])

  const setToFav = async (id: number, bool: boolean) => {
    
    let tempFavIds = favIDs;
    if (bool) {
      tempFavIds = tempFavIds ? [...tempFavIds, id] : null;
    } else {
      tempFavIds = tempFavIds?.filter(tempid => tempid !== id) || [];
    }
    setFavIDs(tempFavIds);
    await storeFavorite(tempFavIds || []);
  }

  return (
    <View style={styles.conatiner}>
      <AppHeader title={ I18n.t('favorite')}/>
      <ScrollView style={styles.conatiner}>
        {data.map((item, index) => {
          
          return favIDs?.find(ele => ele === item.id) && (
            <Card
            key={index}
            image={item.image}
            id={item.id}
            phone={item.phone}
            isFav={!!favIDs?.find((temp:number) => temp == item.id)}
            setToFav={setToFav}
          />)
        })}
      </ScrollView>
    </View>


  );
};

