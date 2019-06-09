<template>
  <div id="nhatkysudung">
    <v-dialog v-model="dialog" max-width="1000px">
      <v-btn flat color="#EF5350" slot="activator">
        <v-icon color="#FAFAFA">place</v-icon>
      </v-btn>
      <v-card flat class="pa-3">
        <h2 style="text-align:center;">Search and add a pin</h2>
        <label style="margin-left:240px;">
          <gmap-autocomplete
          style="width: 500px;
          height: 30px;"
          @place_changed="setPlace"
          ></gmap-autocomplete>
          <v-btn @click="addMarker">Add</v-btn>
        </label>
        <br>
        <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </v-card>
    </v-dialog>
  </div>
</template>

<script >
export default {
  name: "GoogleMap",
  data() {
    return {
      dialog: false,
      //mặc định là Montreal
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // nhận địa điểm thông qua autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
<style>
</style>