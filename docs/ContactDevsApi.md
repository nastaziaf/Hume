# Hume.ContactDevsApi

All URIs are relative to *https://virtserver.swaggerhub.com/intziral/Hume/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactDevs**](ContactDevsApi.md#contactDevs) | **POST** /user/{username}/contact | Contact developers


<a name="contactDevs"></a>
# **contactDevs**
> contactDevs(fullname, email, textMessage, username)

Contact developers

FR10 - Τhe user must be able to contact with developers

### Example
```javascript
var Hume = require('hume');

var apiInstance = new Hume.ContactDevsApi();

var fullname = "fullname_example"; // String | (Required) The user's fullname

var email = "email_example"; // String | (Required) The user's email

var textMessage = "textMessage_example"; // String | (Required) The user's message for the developers

var username = "username_example"; // String | (Required) The username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contactDevs(fullname, email, textMessage, username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullname** | **String**| (Required) The user's fullname | 
 **email** | **String**| (Required) The user's email | 
 **textMessage** | **String**| (Required) The user's message for the developers | 
 **username** | **String**| (Required) The username | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

