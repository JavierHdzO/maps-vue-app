import { ActionTree } from 'vuex';
import { PlaceState } from './state';
import { StateInterface } from '../index';
import { Mutation } from './mutations';

const actions: ActionTree<PlaceState, StateInterface> = {
    getUserLocation( { commit } ){

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit( Mutation.setCoordinates , { lng: coords.longitude, lat: coords.latitude } ),
            ( error ) => { 
                alert('Sorry, Geolocalization is not available')
                throw new Error('Geolocalization is not available')
              }
        )
        return;
    }
}

export default actions;