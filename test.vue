<template>
    <Tab
        :items="objects"
        :value.sync="correctTab"
        :slotMod="tabOptions.slotMod">
        <Photos slot="Photos" :type="userType" :overlay="isOverlay" :open="true" />
    </Tab>
</template>