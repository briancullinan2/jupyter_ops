#FROM
mono:latest

#RUN
mono--
version
#RUN
ls - la
#ADD.
/subscription.services /
home / src
#ADD.
/act.subscription.management.sln /
home / src
#WORKDIR / home / src
#RUN
msbuild.
/subscription.services/
Subscription.Services.EloquaImport / Subscription.Services.EloquaImport.csproj
#RUN
mono
Subscription.Services.EloquaImport.exe

#FROM
microsoft / aspnetcore
:
1.1
FROM
microsoft / aspnetcore - build
:
1.0 - 1.1
ARG
source
EXPOSE
80
WORKDIR / app / src
ADD.
/*.sln /app/src/
ADD ./subscription.services/Subscription.Services.EloquaImport/*.csproj /app/src/subscription.services/Subscription.Services.EloquaImport/
ADD ./subscription.services/Subscription.Services.ZuoraExport/*.csproj /app/src/subscription.services/Subscription.Services.ZuoraExport/
ADD ./*.dcproj /app/src/

RUN /bin/bash -c "dotnet restore ./act.subscription.management.sln"

ADD . /app/src 
RUN /bin/bash -c "dotnet restore ./act.subscription.management.sln && dotnet publish ./act.subscription.management.sln -c Release -o ./obj/Docker/publish"

RUN cp -R ${source:-subscription.services/Subscription.Services.EloquaImport/obj/Docker/publish} /app

WORKDIR /app/publish
EXPOSE 80
ENTRYPOINT ["/usr/bin/dotnet", "/app/publish/Subscription.Services.EloquaImport.dll"]

