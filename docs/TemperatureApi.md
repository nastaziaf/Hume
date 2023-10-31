# Hume.TemperatureApi

All URIs are relative to *https://virtserver.swaggerhub.com/intziral/Hume/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTemp**](TemperatureApi.md#getTemp) | **GET** /user/{username}/zone/{zone_id}/temperature_status | Retrieve temperature's value
[**modifyTemp**](TemperatureApi.md#modifyTemp) | **PUT** /user/{username}/zone/{zone_id}/temperature_status | Modify Temperature


<a name="getTemp"></a>
# **getTemp**
> TempResponse getTemp(username, zoneId)

Retrieve temperature's value

FR-3 Τhe user must be able to modify temperature

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.TemperatureApi();

var username = "username_example"; // String | (Required) The username

var zoneId = 56; // Number | (Required) The ID of the zone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemp(username, zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 
 **zoneId** | **Number**| (Required) The ID of the zone | 

### Return type

[**TempResponse**](TempResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyTemp"></a>
# **modifyTemp**
> modifyTemp(temperatureStatus, username, zoneId)

Modify Temperature

FR-3 Τhe user must be able to modify temperature

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.TemperatureApi();

var temperatureStatus = 1.2; // Number | (Required) The temperature given by the user

var username = "username_example"; // String | (Required) The username

var zoneId = 56; // Number | (Required) The ID of the zone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyTemp(temperatureStatus, username, zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **temperatureStatus** | **Number**| (Required) The temperature given by the user | 
 **username** | **String**| (Required) The username | 
 **zoneId** | **Number**| (Required) The ID of the zone | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

