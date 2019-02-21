<h1 align="center"> API-driven Microservice Architecture </center></h1>
<h2 align="center"> A WSO2 Reference </center></h2>
<p align="center">
<i>
Version Q1-2019<br/>
</i>
</p>

**_Author_**
+ Dakshitha Ratnayake, Enterprise Architect - CTO Office <dakshitha@wso2.com>


> *Microservice Architecture (MSA) is an excellent approach to building decentralized systems. However, microservices are too granular when it comes to architecting larger systems and projects in the brownfield. Most enterprises follow a layered architecture with both Service-oriented Architecture (SOA) principles and MSA concepts by grouping the services or microservices into layers in the overall enterprise architecture. This approach makes each architecture layer a logically centralized set of shared components.*

> *This paper will introduce microservices and will predominantly discuss the layered approach for an API-driven MSA. It will introduce ways of gradually transitioning from a monolithic architecture to a layered MSA via the API gateway pattern using WSO2 middleware and recommended technologies. This paper will also briefly cover other reference architectures such as segmented architecture, which is a subpattern of layered architecture, and the alternative reference architecture known as cell-based architecture. This paper will only cover the request-response communication style for client-microservice communication and a separate paper will discuss the event-driven communication style.*  

## Table of Contents

- 1.0 Introduction
- 2.0 Microservice Architecture (MSA)	
  - 2.1 Key Characteristics
  - 2.2 Microservice Architecture: Benefits and Drawbacks  	
  - 2.3 MSA Implementation  
  - 2.4 Client-to-Microservice Communication  	
    - 2.4.1 API Gateway Pattern  
      - 2.4.1.1 API Gateway	  
        - API Gateway: WSO2 Solution Pattern  	
      - 2.4.1.2 Microservice Orchestration	  
        - Integration Microservices	  
        - Integration Microservices: WSO2 Solution Pattern  	
      - 2.4.1.3 Decentralized Gateways  	
        - Decentralized Gateways: WSO2 Solution Pattern  	
      - 2.4.1.4 API Gateways vs Service Meshes  	
- 3.0 Microservice Architecture - Reference Architectures	  
  - 3.1 Layered Microservice Architecture  	
    - 3.1.1 Layered Architecture with WSO2: A Greenfield Deployment  	
    - 3.1.2 Layered Architecture with WSO2: A Brownfield Deployment  
      - 3.1.2.1 Transitioning from a Monolith to a Microservice Architecture
  - 3.2 Segmented Microservice Architecture  	
    - 3.2.1 Segmented Microservice Architecture with WSO2  	
  - 3.3 Cell-based Microservice Architecture  	
- 4.0 Installation Experience	  
  - 4.1 Continuous Integration and Continuous Deployment  	
  - 4.2 The Technology Stack  	
- 5.0 Summary	  
- References	

## 1.0 Introduction

In an age when delivering great digital experiences is more important than ever,  business success lies in offering agile digital services with high customer satisfaction. There needs to be an alignment between the overall corporate strategy and the pursued digital initiatives in order to transform the core business architecture to a digital architecture. A digital architecture is one that fosters rapid integration of new technologies to fuel digital transformation. To elaborate, a digital architecture is composed of a stack of layers that support the business value chain. Underpinning it all is the technology layer, which encompasses the application, API management, security, analytics, integration, services and data layers, and core infrastructure.  

![digital_architecture](/media/api_msa_digital_architecture.png)
<p align="center">
<i>
Figure 1 - A Typical Digital Architecture<br/>
</i>
</p>

A microservice architecture (MSA) is a method of developing software applications by building them as collections of independent and modular services. Microservices can be deployed to create a more flexible digital architecture. Smaller teams can work separately on these microservices and share them with other application developers via APIs for reuse. In fact, these individual services can be released, scaled, and updated without impact to the rest of the system. When coupled with a containerized environment, MSA is the ideal option for companies that must deliver and scale fast and enable support for a range of platforms and devices. When adopting an MSA, its constituent microservices can be categorized into several types and subtypes. 

At the same time, most organizations are not fully ready to adopt a pure MSA. Even though an MSA approach is followed for newer development, many conventional systems, such as SOA systems, Enterprise Service Bus (ESB), PaaS/SaaS applications, and any other monolithic vertical deployments of legacy applications will remain a part of an enterprise’s overall topology. These brownfield systems cannot be ignored and will have to be accessed by the microservices (at least during the transition period). These systems and services will have to be exposed via managed APIs for seamless internal and external access. 

By considering the above facts, the holistic view of an MSA-enabled digital architecture can be divided  into three zones as given below:  
- Zone 1: Inner Architecture 
- Zone 2: Outer Architecture 
- Zone 3: External Architecture 

|  |  |
|--|--|
|Inner Architecture|Core Microservices - Microservices which purely contain business logic and data services.|
|Outer Architecture|Utility Microservices - Includes integration microservices, micro-gateways, security token services, micro-brokers or any other micro-runtime.|
|External Architecture|End-user applications, legacy systems and data, SaaS applications, partner systems, etc.|
| | |