# Hume.AlarmApi

All URIs are relative to *https://virtserver.swaggerhub.com/intziral/Hume/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlarmStatus**](AlarmApi.md#getAlarmStatus) | **GET** /user/{username}/zone/{zone_id}/alarm_status | Retrieve alarm's status
[**modifyAlarmStatus**](AlarmApi.md#modifyAlarmStatus) | **PUT** /user/{username}/zone/{zone_id}/alarm_status | Handle alarm's status


<a name="getAlarmStatus"></a>
# **getAlarmStatus**
> AlarmResponse getAlarmStatus(username, zoneId)

Retrieve alarm's status

FR-5 Τhe user must be able to handle alarm system

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.AlarmApi();

var username = "username_example"; // String | (Required) The username

var zoneId = 56; // Number | (Required) The ID of the zone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAlarmStatus(username, zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 
 **zoneId** | **Number**| (Required) The ID of the zone | 

### Return type

[**AlarmResponse**](AlarmResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyAlarmStatus"></a>
# **modifyAlarmStatus**
> modifyAlarmStatus(alarmStatus, username, zoneId)

Handle alarm's status

FR-5 Τhe user must be able to handle alarm system

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.AlarmApi();

var alarmStatus = true; // Boolean | (Required) The alarm's status given by the user

var username = "username_example"; // String | (Required) The username

var zoneId = 56; // Number | (Required) The ID of the zone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.modifyAlarmStatus(alarmStatus, username, zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alarmStatus** | **Boolean**| (Required) The alarm's status given by the user | 
 **username** | **String**| (Required) The username | 
 **zoneId** | **Number**| (Required) The ID of the zone | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

