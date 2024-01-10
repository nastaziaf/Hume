<!-- 
  User
  Comments: This is a markdown file with added comments about # Hume.DeviceApi.
-->

# Hume.DeviceApi

All URIs are relative to *https://virtserver.swaggerhub.com/intziral/Hume/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDevice**](DeviceApi.md#addDevice) | **POST** /user/{username}/device | Add new smart device
[**deleteDevice**](DeviceApi.md#deleteDevice) | **DELETE** /user/{username}/device/{device_id} | Delete smart device
[**getDevice**](DeviceApi.md#getDevice) | **GET** /user/{username}/device/{device_id} | Retrieve smart device
[**getDevices**](DeviceApi.md#getDevices) | **GET** /user/{username}/device | Get all smart devices
[**updateDevice**](DeviceApi.md#updateDevice) | **PUT** /user/{username}/device/{device_name}/deviceStatus | Update smart device


<a name="addDevice"></a>
# **addDevice**
> addDevice(username, body)

Add new smart device

FR2 - The user must be able to add smart devices in the system 

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.DeviceApi();

var username = "username_example"; // String | (Required) The user adds a new smart device

var body = new Hume.AddDeviceRequest(); // AddDeviceRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDevice(username, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The user adds a new smart device | 
 **body** | [**AddDeviceRequest**](AddDeviceRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDevice"></a>
# **deleteDevice**
> deleteDevice(username, deviceId)

Delete smart device

FR4 - Τhe user must be able handle operation of smart devices

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.DeviceApi();

var username = "username_example"; // String | (Required) The username

var deviceId = 56; // Number | (Required) The ID of the smart device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDevice(username, deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 
 **deviceId** | **Number**| (Required) The ID of the smart device | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDevice"></a>
# **getDevice**
> SuccessfulDeviceGet getDevice(username, deviceId)

Retrieve smart device

FR4 - Τhe user must be able handle operation of smart devices

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.DeviceApi();

var username = "username_example"; // String | (Required) The username

var deviceId = 56; // Number | (Required) The ID of the smart device


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDevice(username, deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 
 **deviceId** | **Number**| (Required) The ID of the smart device | 

### Return type

[**SuccessfulDeviceGet**](SuccessfulDeviceGet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDevices"></a>
# **getDevices**
> [[DeviceResponse]] getDevices(username)

Get all smart devices

FR4 - Τhe user must be able handle operation of smart devices

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.DeviceApi();

var username = "username_example"; // String | (Required) The username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDevices(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 

### Return type

**[[DeviceResponse]]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDevice"></a>
# **updateDevice**
> SuccessfulDeviceUpdate updateDevice(deviceStatus, username, deviceName, opts)

Update smart device

FR4 - Τhe user must be able handle operation of smart devices

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.DeviceApi();

var deviceStatus = "deviceStatus_example"; // String | (Required) The new smart device's operation that is given by the user

var username = "username_example"; // String | (Required) The username

var deviceName = "deviceName_example"; // String | (Required) The name of the smart device

var opts = { 
  'body': new Hume.UpdateDeviceRequest() // UpdateDeviceRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDevice(deviceStatus, username, deviceName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceStatus** | **String**| (Required) The new smart device's operation that is given by the user | 
 **username** | **String**| (Required) The username | 
 **deviceName** | **String**| (Required) The name of the smart device | 
 **body** | [**UpdateDeviceRequest**](UpdateDeviceRequest.md)|  | [optional] 

### Return type

[**SuccessfulDeviceUpdate**](SuccessfulDeviceUpdate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

