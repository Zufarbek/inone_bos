<template>
  <div id="app">
    <el-container>
      <el-aside width="230px" class="text-left">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="0">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>Reports</span>
            </template>
            
              <el-menu-item index="1-1">Sales summary</el-menu-item>
              <el-menu-item index="1-2">Sales by item</el-menu-item>
              <el-menu-item index="1-3">Sales by category</el-menu-item>
              <el-menu-item index="1-4">Sales by employee</el-menu-item>
              <el-menu-item index="1-5">Sales by payment type</el-menu-item>
              <el-menu-item index="1-6">Receipts</el-menu-item>
              <el-menu-item index="1-7">Discounts</el-menu-item>
              <el-menu-item index="1-8">Taxes</el-menu-item>
              <!-- <el-menu-item index="1-1">Item list</el-menu-item>
              <el-menu-item index="1-2">Categories</el-menu-item>
              <el-menu-item index="1-2">Discounts</el-menu-item> -->
            <!-- <el-submenu index="1-4">
              <template slot="title">item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
              <el-menu-item index="1-4-1">item one</el-menu-item>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>Items</span>
            </template>
                <router-link to="/item"><el-menu-item index="1-1">Item</el-menu-item></router-link>
                <router-link to="/add_item"><el-menu-item index="1-2">Add item</el-menu-item></router-link>
              <!-- <el-menu-item index="1-1">Item list</el-menu-item>
              <el-menu-item index="1-2">Categories</el-menu-item>
              <el-menu-item index="1-2">Discounts</el-menu-item> -->
            <!-- <el-submenu index="1-4">
              <template slot="title">item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
              <el-menu-item index="1-4-1">item one</el-menu-item>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-shopping-cart-full"></i>
            <span>Inventory management</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>Employees</span>
            </template>
              <el-menu-item index="1-1">Employee list</el-menu-item>
              <el-menu-item index="1-2">Access rights</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-user-solid"></i>
            <span>Customers</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span>Settings</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- <el-header>Header uchun joy</el-header> -->
        <el-main>
        <div class="logo-container" style="text-align: left">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280" width="60" height="60">
            <path id="Shape 1" class="shp0" d="M140 160L140 120L1000 120L1000 160L140 160Z" />
            <text id=" " style="transform: matrix(1,0,0,1,1578,586)" >
            </text>
            <path id="Shape 1 copy" class="shp0" d="M280 1160L280 1120L1140 1120L1140 1160L280 1160Z" />
            <text id="IN " style="transform: matrix(1,0,0,1,276,760)" >
              <tspan x="0" y="0" class="txt1">IN</tspan>
            </text>
            <text id="one " style="transform: matrix(1,0,0,1,313,1041)" >
              <tspan x="0" y="0" class="txt2">one</tspan>
            </text>
            <path id="Shape 2" class="shp0" d="M1040 160L1040 120L1140 120L1140 160L1040 160Z" />
            <path id="Shape 2 copy" class="shp0" d="M140 1160L140 1120L240 1120L240 1160L140 1160Z" />
            <path id="Shape 3" class="shp0" d="M1100 160L1140 160L1140 1120L1100 1120L1100 160Z" />
            <path id="Shape 3 copy" class="shp0" d="M140 160L180 160L180 1120L140 1120L140 160Z" />
          </svg> -->

          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">InOne</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/item">Items</a></el-breadcrumb-item>
            <el-breadcrumb-item>Add Items</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
              <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-aside {
  background: #545c64;
  color: white;
  min-height: 100vh;
}
/* INONE SVG file */
		tspan { white-space:pre }
		.shp0 { fill: #ffa914 } 
		.txt1 { font-size: 800px;fill: #ffa914;font-family: "Spin Cycle OT";font-weight: 400 } 
		.txt2 { font-size: 335px;fill: #ffa914;font-family: "Spin Cycle OT";font-weight: 400 } 
/* INONE SVG file */

  #id {
    text-decoration: none;
  }

  .el-aside {
    text-align: left;
  }
  .el-submenu .el-menu-item  {
    margin-left: 15px;
  }
</style>
