# SimpleGainApi.DevelopersApi

All URIs are relative to *https://virtserver.swaggerhub.com/billhennessy/gain/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEligibility**](DevelopersApi.md#addEligibility) | **POST** /gain | adds a product eligibility record
[**searchInjectors**](DevelopersApi.md#searchInjectors) | **GET** /gain | searches injectors

<a name="addEligibility"></a>
# **addEligibility**
> addEligibility(opts)

adds a product eligibility record

Adds an eligible product to an injector&#x27;s record (required)

### Example
```javascript
import {SimpleGainApi} from 'simple_gain_api';

let apiInstance = new SimpleGainApi.DevelopersApi();
let opts = { 
  'body': new SimpleGainApi.EligibilityItem() // EligibilityItem | Eligibility item to add
};
apiInstance.addEligibility(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EligibilityItem**](EligibilityItem.md)| Eligibility item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchInjectors"></a>
# **searchInjectors**
> [EligibilityItem] searchInjectors(opts)

searches injectors

By passing in the appropriate MKID, you can search for available injectors in the system (nice to have, not required) 

### Example
```javascript
import {SimpleGainApi} from 'simple_gain_api';

let apiInstance = new SimpleGainApi.DevelopersApi();
let opts = { 
  'searchString': "searchString_example", // String | pass an optional search string for looking up injectors
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.searchInjectors(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**| pass an optional search string for looking up injectors | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[EligibilityItem]**](EligibilityItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

