import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Axios from 'axios';
import CardView from 'react-native-cardview'
export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(({ data }) => {
        console.log("defaultApp -> data", data.movies)
        setData(data.data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 ,backgroundColor:'#FFFFFf'}}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {
            console.log("item", item)
            return (
           
<CardView style={{backgroundColor:'#B00020', marginTop:10}}
          cardElevation={5}
          cardMaxElevation={2}
          cornerRadius={10}>
    
             <Text style={{fontFamily:'Cochin', fontSize: 18,fontWeight: "bold",color:'white'}}>Name:{item.employee_name}</Text>
              <Text style={{fontFamily:'Cochin', fontSize: 15,fontWeight: "bold",color:'white'}}> Age:{item.employee_age}</Text>
            <Text style={{fontFamily:'Cochin', fontSize: 15,fontWeight: "bold",color:'white'}}>Slaary:{item.employee_salary}</Text>
              </CardView>




            )
          }}
        />
      )}
    </View>
  );
};


