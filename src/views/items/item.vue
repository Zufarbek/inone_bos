<template>
  <div class="container">
    
    <div 
    style="
    justify-content: space-around;
    display: flex;
    margin-top: 10px;">
      <router-link to="/add_item"><el-button @click="resetDateFilter" type="success">+ ADD ITEM</el-button></router-link>
      <el-button @click="clearFilter">EXPORT</el-button>
    </div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="Item name"
        prop="name">
      </el-table-column>
      <el-table-column
        label="Category name"
        prop="category">
      </el-table-column>
      <el-table-column
        label="Price"
        prop="price">
      </el-table-column>
      <el-table-column
        label="Cost"
        prop="cost">
      </el-table-column>
      <el-table-column
        label="Margin"
        prop="margin">
      </el-table-column>
      <el-table-column
        label="In stock"
        prop="in_stock">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input 
            v-model="search"
            size="mini"
            placeholder="Type Item name"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: 'Anor',
          category: "Mevalar",
          price: 6500.00,
          cost: 8200.00,
          margin: '15%',
          in_stock: '27',
        }, {
          name: 'Olma',
          category: "Mevalar",
          price: 1500.00,
          cost: 2500.00,
          margin: '5%',
          in_stock: '10',
        }, {
          name: 'Gilos',
          category: "Mevalar",
          price: 5300.00,
          cost: 6500.00,
          margin: '30%',
          in_stock: '45',
        }, {
          name: 'Nok',
          category: "Mevalar",
          price: 2800.00,
          cost: 3000.00,
          margin: '25%',
          in_stock: '60',
        },
        {
          name: 'Anor',
          category: "Mevalar",
          price: 6500.00,
          cost: 8200.00,
          margin: '15%',
          in_stock: '27',
        }, {
          name: 'Olma',
          category: "Mevalar",
          price: 1500.00,
          cost: 2500.00,
          margin: '5%',
          in_stock: '10',
        }, {
          name: 'Gilos',
          category: "Mevalar",
          price: 5300.00,
          cost: 6500.00,
          margin: '30%',
          in_stock: '45',
        }, {
          name: 'Nok',
          category: "Mevalar",
          price: 2800.00,
          cost: 3000.00,
          margin: '25%',
          in_stock: '60',
        }],
        search: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.tableData.splice(index, 1);
        alert(this.tableData[index].name + " o'chirildi");
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
  }
</script>