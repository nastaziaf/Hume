# Hume.ZoneApi

All URIs are relative to *https://virtserver.swaggerhub.com/intziral/Hume/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addZone**](ZoneApi.md#addZone) | **POST** /user/{username}/zone | Add new zone
[**deleteZone**](ZoneApi.md#deleteZone) | **DELETE** /user/{username}/zone/{zone_id} | Delete zone
[**getZone**](ZoneApi.md#getZone) | **GET** /user/{username}/zone/{zone_id} | Retrieve zone
[**getZones**](ZoneApi.md#getZones) | **GET** /user/{username}/zone | Get all smart zones


<a name="addZone"></a>
# **addZone**
> addZone(username, body)

Add new zone

FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.ZoneApi();

var username = "username_example"; // String | (Required) The username

var body = new Hume.AddZoneRequest(); // AddZoneRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addZone(username, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 
 **body** | [**AddZoneRequest**](AddZoneRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteZone"></a>
# **deleteZone**
> deleteZone(username, zoneId)

Delete zone

FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.ZoneApi();

var username = "username_example"; // String | (Required) The username

var zoneId = 56; // Number | (Required) The ID of zone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteZone(username, zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 
 **zoneId** | **Number**| (Required) The ID of zone | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getZone"></a>
# **getZone**
> ZoneResponse getZone(username, zoneId)

Retrieve zone

FR-3 Τhe user must be able to modify temperature FR-5 Τhe user must be able to handle alarm system

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.ZoneApi();

var username = "username_example"; // String | (Required) The username

var zoneId = 56; // Number | (Required) The ID of the zone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZone(username, zoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 
 **zoneId** | **Number**| (Required) The ID of the zone | 

### Return type

[**ZoneResponse**](ZoneResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getZones"></a>
# **getZones**
> [ZoneResponse] getZones(username)

Get all smart zones

FR3 - Τhe user must be able to modify temperature >- FR5 - Τhe user must be able to handle alarm system

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.ZoneApi();

var username = "username_example"; // String | (Required) The username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getZones(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| (Required) The username | 

### Return type

[**[ZoneResponse]**](ZoneResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

