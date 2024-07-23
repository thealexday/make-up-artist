import '../../common.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YandexMaps:React.FC = () => {
    return (
        <section>
            <div className="container">
            <YMaps>
                <Map style={{width: '100%', height: '350px', margin: '50px 0'}} defaultState={{ center: [54.987869569703236,82.91297349999999], zoom: 16 }}>
                <Placemark geometry={[54.987869569703236,82.91297349999999]}/>
                </Map>
            </YMaps>
            </div>
        </section>
    )
}