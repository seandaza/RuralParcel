<template>
  <div class="home">
    <div>
      <b-container>
        <b-card-group>
            <b-card
              title="Terreno 1"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; margin: 2%;"
            >
                <b-card-text class="txtMargin">Terreno 1</b-card-text>
                <b-card-text class="txtMargin">Dueño 1</b-card-text>
                <b-card-text class="txtMargin">Hectareas 1</b-card-text>
                <b-card-text class="txtMargin">Ubicación 1</b-card-text>
                <b-card-text class="txtMargin">Descripción 1</b-card-text>
                <b-card-text class="txtMargin">Sistema de riego 1</b-card-text>
          
                <b-button v-b-modal.terreno-1-editar variant="primary" class="botonCard">Editar</b-button>
                <b-modal id="terreno-1-editar" title="Actualizar Terreno">
                  <div>
                    <b-form  v-if="show">
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
              
                      <b-form-group id="input-group-4" label="Sistema de riego:" label-for="input-4">
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
                            placeholder="Seleccione las imagenes"
                          ></b-form-file>
                      </b-form-group>
              
                      <b-form-group id="input-group-7" label="Disponibilidad del terreno:" label-for="input-7">
                          <b-form-select
                              id="input-7"
                              v-model="form.dispobilidadTerreno"
                              :options="dispobilidadTerreno"
                              required
                              style="margin-bottom: -10%"
                          ></b-form-select>
                      </b-form-group>
                    </b-form>
                  </div>
                  <template #modal-footer="{ ok, cancel}">

                    <!-- Botones del Modal -->
                    <b-button variant="primary" class="botonModal" @click="ok()">
                      Registrar
                    </b-button>
                    <b-button variant="danger" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
                <b-button  v-b-modal.terreno-6-eliminar variant="danger" class="botonCard">Eliminar</b-button>
                  <b-modal id="terreno-6-eliminar" title="Eliminar Terreno">
                  <p class="my-4">¿Desea eliminar el terreno seleccionado?</p>
                  <template #modal-footer="{ ok, cancel}">
                    <!-- Botones del Modal -->
                    <b-button variant="danger" class="botonModal" @click="ok()">
                      Eliminar
                    </b-button>
                    <b-button variant="primary" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
            </b-card>

            <b-card
              title="Terreno 2"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;  margin: 2%;"
              class=" "
            >
                <b-card-text class="txtMargin">Terreno 2</b-card-text>
                <b-card-text class="txtMargin">Dueño 2</b-card-text>
                <b-card-text class="txtMargin">Hectareas 2</b-card-text>
                <b-card-text class="txtMargin">Ubicación 2</b-card-text>
                <b-card-text class="txtMargin">Descripción 2</b-card-text>
                <b-card-text class="txtMargin">Sistema de riego 2</b-card-text>
          
                <b-button v-b-modal.terreno-2-editar variant="primary" class="botonCard">Editar</b-button>
                <b-modal id="terreno-2-editar" title="Actualizar Terreno">
                  <div>
                    <b-form  v-if="show">
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
              
                      <b-form-group id="input-group-4" label="Sistema de riego:" label-for="input-4">
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
                            placeholder="Seleccione las imagenes"
                          ></b-form-file>
                      </b-form-group>
              
                      <b-form-group id="input-group-7" label="Disponibilidad del terreno:" label-for="input-7">
                          <b-form-select
                              id="input-7"
                              v-model="form.dispobilidadTerreno"
                              :options="dispobilidadTerreno"
                              required
                              style="margin-bottom: -10%"
                          ></b-form-select>
                      </b-form-group>
                    </b-form>
                  </div>
                  <template #modal-footer="{ ok, cancel}">

                    <!-- Botones del Modal -->
                    <b-button variant="primary" class="botonModal" @click="ok()">
                      Registrar
                    </b-button>
                    <b-button variant="danger" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
                <b-button  v-b-modal.terreno-2-eliminar variant="danger" class="botonCard">Eliminar</b-button>
                  <b-modal id="terreno-2-eliminar" title="Eliminar Terreno">
                  <p class="my-4">¿Desea eliminar el terreno seleccionado?</p>
                  <template #modal-footer="{ ok, cancel}">
                    <!-- Botones del Modal -->
                    <b-button variant="danger" class="botonModal" @click="ok()">
                      Eliminar
                    </b-button>
                    <b-button variant="primary" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
            </b-card>

            <b-card
              title="Terreno 3"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;  margin: 2%;"
            >
                <b-card-text class="txtMargin">Terreno 3</b-card-text>
                <b-card-text class="txtMargin">Dueño 3</b-card-text>
                <b-card-text class="txtMargin">Hectareas 3</b-card-text>
                <b-card-text class="txtMargin">Ubicación 3</b-card-text>
                <b-card-text class="txtMargin">Descripción 3</b-card-text>
                <b-card-text class="txtMargin">Sistema de riego 3</b-card-text>
          
                <b-button v-b-modal.terreno-3-editar variant="primary" class="botonCard">Editar</b-button>
                <b-modal id="terreno-3-editar" title="Actualizar Terreno">
                  <div>
                    <b-form  v-if="show">
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
              
                      <b-form-group id="input-group-4" label="Sistema de riego:" label-for="input-4">
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
                            placeholder="Seleccione las imagenes"
                          ></b-form-file>
                      </b-form-group>
              
                      <b-form-group id="input-group-7" label="Disponibilidad del terreno:" label-for="input-7">
                          <b-form-select
                              id="input-7"
                              v-model="form.dispobilidadTerreno"
                              :options="dispobilidadTerreno"
                              required
                              style="margin-bottom: -10%"
                          ></b-form-select>
                      </b-form-group>
                    </b-form>
                  </div>
                  <template #modal-footer="{ ok, cancel}">

                    <!-- Botones del Modal -->
                    <b-button variant="primary" class="botonModal" @click="ok()">
                      Registrar
                    </b-button>
                    <b-button variant="danger" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
                <b-button  v-b-modal.terreno-3-eliminar variant="danger" class="botonCard">Eliminar</b-button>
                  <b-modal id="terreno-3-eliminar" title="Eliminar Terreno">
                  <p class="my-4">¿Desea eliminar el terreno seleccionado?</p>
                  <template #modal-footer="{ ok, cancel}">
                    <!-- Botones del Modal -->
                    <b-button variant="danger" class="botonModal" @click="ok()">
                      Eliminar
                    </b-button>
                    <b-button variant="primary" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
            </b-card>
        </b-card-group>
        <b-card-group>
            <b-card
              title="Terreno 4"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;  margin: 2%;"
            >
                <b-card-text class="txtMargin">Terreno 4</b-card-text>
                <b-card-text class="txtMargin">Dueño 4</b-card-text>
                <b-card-text class="txtMargin">Hectareas 4</b-card-text>
                <b-card-text class="txtMargin">Ubicación 4</b-card-text>
                <b-card-text class="txtMargin">Descripción 4</b-card-text>
                <b-card-text class="txtMargin">Sistema de riego 4</b-card-text>
          
                <b-button v-b-modal.terreno-4-editar variant="primary" class="botonCard">Editar</b-button>
                <b-modal id="terreno-4-editar" title="Actualizar Terreno">
                  <div>
                    <b-form  v-if="show">
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
              
                      <b-form-group id="input-group-4" label="Sistema de riego:" label-for="input-4">
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
                            placeholder="Seleccione las imagenes"
                          ></b-form-file>
                      </b-form-group>
              
                      <b-form-group id="input-group-7" label="Disponibilidad del terreno:" label-for="input-7">
                          <b-form-select
                              id="input-7"
                              v-model="form.dispobilidadTerreno"
                              :options="dispobilidadTerreno"
                              required
                              style="margin-bottom: -10%"
                          ></b-form-select>
                      </b-form-group>
                    </b-form>
                  </div>
                  <template #modal-footer="{ ok, cancel}">

                    <!-- Botones del Modal -->
                    <b-button variant="primary" class="botonModal" @click="ok()">
                      Registrar
                    </b-button>
                    <b-button variant="danger" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
                <b-button  v-b-modal.terreno-4-eliminar variant="danger" class="botonCard">Eliminar</b-button>
                  <b-modal id="terreno-4-eliminar" title="Eliminar Terreno">
                  <p class="my-4">¿Desea eliminar el terreno seleccionado?</p>
                  <template #modal-footer="{ ok, cancel}">
                    <!-- Botones del Modal -->
                    <b-button variant="danger" class="botonModal" @click="ok()">
                      Eliminar
                    </b-button>
                    <b-button variant="primary" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
            </b-card>

            <b-card
              title="Terreno 5"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;  margin: 2%;"
            >
                <b-card-text class="txtMargin">Terreno 5</b-card-text>
                <b-card-text class="txtMargin">Dueño 5</b-card-text>
                <b-card-text class="txtMargin">Hectareas 5</b-card-text>
                <b-card-text class="txtMargin">Ubicación 5</b-card-text>
                <b-card-text class="txtMargin">Descripción 5</b-card-text>
                <b-card-text class="txtMargin">Sistema de riego 5</b-card-text>
          
                <b-button v-b-modal.terreno-5-editar variant="primary" class="botonCard">Editar</b-button>
                <b-modal id="terreno-5-editar" title="Actualizar Terreno">
                  <div>
                    <b-form  v-if="show">
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
              
                      <b-form-group id="input-group-4" label="Sistema de riego:" label-for="input-4">
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
                            placeholder="Seleccione las imagenes"
                          ></b-form-file>
                      </b-form-group>
              
                      <b-form-group id="input-group-7" label="Disponibilidad del terreno:" label-for="input-7">
                          <b-form-select
                              id="input-7"
                              v-model="form.dispobilidadTerreno"
                              :options="dispobilidadTerreno"
                              required
                              style="margin-bottom: -10%"
                          ></b-form-select>
                      </b-form-group>
                    </b-form>
                  </div>
                  <template #modal-footer="{ ok, cancel}">

                    <!-- Botones del Modal -->
                    <b-button variant="primary" class="botonModal" @click="ok()">
                      Registrar
                    </b-button>
                    <b-button variant="danger" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
                <b-button  v-b-modal.terreno-5-eliminar variant="danger" class="botonCard">Eliminar</b-button>
                  <b-modal id="terreno-5-eliminar" title="Eliminar Terreno">
                  <p class="my-4">¿Desea eliminar el terreno seleccionado?</p>
                  <template #modal-footer="{ ok, cancel}">
                    <!-- Botones del Modal -->
                    <b-button variant="danger" class="botonModal" @click="ok()">
                      Eliminar
                    </b-button>
                    <b-button variant="primary" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
            </b-card>

            <b-card
              title="Terreno 6"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;  margin: 2%;"
            >
                <b-card-text class="txtMargin">Terreno 6</b-card-text>
                <b-card-text class="txtMargin">Dueño 6</b-card-text>
                <b-card-text class="txtMargin">Hectareas 6</b-card-text>
                <b-card-text class="txtMargin">Ubicación 6</b-card-text>
                <b-card-text class="txtMargin">Descripción 6</b-card-text>
                <b-card-text class="txtMargin">Sistema de riego 6</b-card-text>
          
                <b-button v-b-modal.terreno-6-editar variant="primary" class="botonCard">Editar</b-button>
                <b-modal id="terreno-6-editar" title="Actualizar Terreno">
                  <div>
                    <b-form  v-if="show">
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
              
                      <b-form-group id="input-group-4" label="Sistema de riego:" label-for="input-4">
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
                            placeholder="Seleccione las imagenes"
                          ></b-form-file>
                      </b-form-group>
              
                      <b-form-group id="input-group-7" label="Disponibilidad del terreno:" label-for="input-7">
                          <b-form-select
                              id="input-7"
                              v-model="form.dispobilidadTerreno"
                              :options="dispobilidadTerreno"
                              required
                              style="margin-bottom: -10%"
                          ></b-form-select>
                      </b-form-group>
                    </b-form>
                  </div>
                  <template #modal-footer="{ ok, cancel}">

                    <!-- Botones del Modal -->
                    <b-button variant="primary" class="botonModal" @click="ok()">
                      Registrar
                    </b-button>
                    <b-button variant="danger" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
                <b-button  v-b-modal.terreno-6-eliminar variant="danger" class="botonCard">Eliminar</b-button>
                  <b-modal id="terreno-6-eliminar" title="Eliminar Terreno">
                  <p class="my-4">¿Desea eliminar el terreno seleccionado?</p>
                  <template #modal-footer="{ ok, cancel}">
                    <!-- Botones del Modal -->
                    <b-button variant="danger" class="botonModal" @click="ok()">
                      Eliminar
                    </b-button>
                    <b-button variant="primary" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
            </b-card>
        </b-card-group>
      </b-container>   
    </div> 
  </div>
</template>


<!-- CSS -->
<style scoped>
  .txtMargin{
    margin-bottom: -1%;
    text-align: left;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .botonCard {
    margin: 1%; 
    margin-top: 5%;
    border-radius: 15px;
    width: 30%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .botonModal {
    border-radius: 15px;
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
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
