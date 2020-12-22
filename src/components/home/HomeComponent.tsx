import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { styles } from './style';
import { HomeHeader } from './HomeHeader';
import { Card } from 'components/card/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { data } from 'json/Data'
import { getFavorite, storeFavorite } from 'cache/FavoriteCache';

interface Props {
  componentId: string;
  drawerRef: React.ReactNode
}

export const HomeComponent: NavigationFunctionComponent<Props> = (props: Props) => {

  const [favIDs, setFavIDs] = useState<number[] | null>([])
  const getFavoriteIDs = async () => {
    const data = await getFavorite();
    setFavIDs(data)
  }
  useEffect(() => {
    getFavoriteIDs();
    Navigation.events().registerComponentDidAppearListener(({ componentId }) => {
      if (componentId == props.componentId) {
        getFavoriteIDs();
      }
    });
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
      <HomeHeader componentId={props.componentId} drawerRef={props.drawerRef} />
      <ScrollView style={styles.conatiner}>
        {data.map((item, index) => <Card
          key={index}
          image={item.image}
          id={item.id}
          phone={item.phone}
          isFav={!!favIDs?.find(temp => temp == item.id)}
          setToFav={setToFav}
        />)}
      </ScrollView>
    </View>


  );
};
