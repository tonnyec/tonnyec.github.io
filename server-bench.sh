#!/bin/bash

# Obtener el hostname de la máquina
HOSTNAME=$(hostname -a)

# Nombre del archivo de log
LOGFILE="${HOSTNAME}-sysbench.log"

# Actualizar los paquetes e instalar las herramientas necesarias
apt update
apt install -y sysbench iperf3 fio

# Crear o vaciar el archivo de log
> $LOGFILE

# Agregar el hostname al archivo de log
echo "Hostname: $HOSTNAME" | tee -a $LOGFILE
echo "" | tee -a $LOGFILE

# Prueba de CPU
echo "Prueba de CPU:" | tee -a $LOGFILE
sysbench cpu --cpu-max-prime=20000 run | tee -a $LOGFILE
echo "" | tee -a $LOGFILE

# Prueba de Memoria
echo "Prueba de Memoria:" | tee -a $LOGFILE
sysbench memory run | tee -a $LOGFILE
echo "" | tee -a $LOGFILE

# Prueba de Escritura de Disco
echo "Prueba de Escritura de Disco:" | tee -a $LOGFILE
fio --name=write_test --size=1G --filename=/tmp/write_test_file --bs=1M --nrfiles=1 --direct=1 --sync=1 --rw=write --end_fsync=1 | tee -a $LOGFILE
echo "" | tee -a $LOGFILE

# Prueba de Lectura de Disco
echo "Prueba de Lectura de Disco:" | tee -a $LOGFILE
fio --name=read_test --size=1G --filename=/tmp/write_test_file --bs=1M --nrfiles=1 --direct=1 --sync=1 --rw=read | tee -a $LOGFILE
echo "" | tee -a $LOGFILE

# Prueba de Red
SERVER_IP="<IP_DEL_SERVIDOR_IPERF3>"
echo "Prueba de Red contra ${SERVER_IP}:" | tee -a $LOGFILE
iperf3 -c $SERVER_IP | tee -a $LOGFILE
echo "" | tee -a $LOGFILE

# Eliminar archivos de prueba de disco
rm /tmp/write_test_file

# Borrar la IP del servidor del archivo de log
sed -i "/${SERVER_IP}/d" $LOGFILE

echo "Las pruebas de rendimiento han finalizado. Los resultados están guardados en $LOGFILE"
