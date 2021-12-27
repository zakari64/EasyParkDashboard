import React from 'react'
import MaterialTable from 'material-table'
import './operations.css'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@mui/material/Button';

function Operations() {
   
    return (
      <div>
    <MaterialTable
        title="Positioning Actions Column Preview"
        columns={[
          { title: 'Nom', field: 'Nom' },
          { title: 'Prénom', field: 'Prénom' },
          { title: 'DateDeNaissance', field: 'DateDeNaissance', type: 'numeric' },
          {
            title: 'Ville',
            field: 'Ville',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 },
          { Nom: 'Mehmet', Prénom: 'Baran', DateDeNaissance: 1987, Ville: 63 }

        ]}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          rowData => ({
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000
          })
        ]}
        options={{
          actionsColumnIndex: -1
        }}
        />
              <Button variant="outlined">Ajouter</Button>

      </div>
    
      )
   

  }

export default Operations
