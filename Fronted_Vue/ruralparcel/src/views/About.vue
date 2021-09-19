<template>
  <div class="about">
    <div>
      <b-container>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Cantidad de hectáreas" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.nameCantidaHectareas"
              placeholder="Digite la cantidad de hectáreas"
              required
            ></b-form-input>
          </b-form-group>
    
          <b-form-group id="input-group-2" label="Ubicación del terreno" label-for="input-2">
            <b-form-select
              id="input-group-2"
              v-model="form.ubicacionTerreno"
              :options="ubicacionTerreno"
              placeholder="Seleccione la ubicación de terreno"
              required
            ></b-form-select>
          </b-form-group>
    
          <b-form-group id="input-group-3" label="Nombre del dueño de la tierra" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.nombreDuenio"
              placeholder="Digite el nombre del dueño de la tierra"
              required
            ></b-form-input>
          </b-form-group>
    
          <b-form-group id="input-group-4" label="Sistemas de riego:" label-for="input-4">
            <b-form-select
              id="input-4"
              v-model="form.sistemaRiego"
              :options="sistemaRiego"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-5" label="Especificacioens del terreno:" label-for="input-5">
            <b-form-textarea 
              id="textarea" 
              v-model="text" 
              placeholder="Digite las especificaciones del terreno..." 
              rows="3" 
              max-rows="10"
            ></b-form-textarea>
          </b-form-group>
              

          <b-form-group id="input-group-6" label="Seleccione las imagenes de su terreno:" label-for="input-6">
            <b-form-file 
              v-model="file1" 
              :state="Boolean(file1)" 
              placeholder=""
            ></b-form-file>
          </b-form-group>
    
          <b-form-group id="input-group-7" label="Disponibilidad del terreno:" label-for="input-7">
            <b-form-select
              id="input-7"
              v-model="form.dispobilidadTerreno"
              :options="dispobilidadTerreno"
              required
            ></b-form-select>
          </b-form-group>
  
          <b-button type="submit" variant="primary" class="boton">Crear</b-button>
        </b-form>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
  .boton{
    margin: 2%;
    border-radius: 18px;
    width: 10%;
  }
</style>

<script>
    export default {
        data() {
            return {
                form: {
                    nameCantidaHectareas: '',
                    ubicacionTerreno: null,
                    nombreDuenio: '',
                    sistemaRiego: null,
                    text: '',
                    file1: null,
                    dispobilidadTerreno: null
                },
                sistemaRiego: [{ text: 'Seleccione el sistema de riego', value: null }, 'Goteo', 'Gravedad', 'Bombeo', 'Aspersión'],
                ubicacionTerreno: [{ text: 'Seleccione la ubicación del terreno', value: null }, 'Ubicación 1', 'Ubicación 2', 'Ubicación 3', 'Ubicación 4'],
                dispobilidadTerreno: [{ text: 'Seleccione la disponibilidad del terreno', value: null }, 'Ocupado', 'Libre'],
                show: true
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.nameCantidaHectareas = ''
                this.ubicacionTerreno = null
                this.nombreDuenio = ''
                this.sistemaRiego = null
                this.text = ''
                this.file1 = null
                this.dispobilidadTerreno = null
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

