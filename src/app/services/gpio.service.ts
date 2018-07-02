import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import * as socketIo from 'socket.io-client';
import {LedEvent} from '../models/ledEvent.model';
import {GpioEventTypes} from '../models/gpioEventType.enum';
import {TemperatureEvent} from '../models/temperatureEvent.model';
import {LaserEvent} from '../models/laserEvent.model';
import {RgbEvent} from '../models/rgbEvent.model';

const SERVER_URL = 'http://192.168.0.21:8080';

@Injectable({
  providedIn: 'root'
})
export class GpioService {
  private socket;

  constructor() {
  }

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public onLed(): Observable<LedEvent> {
    return new Observable<LedEvent>(observer => {
      this.socket.on(GpioEventTypes.LED, (data) => observer.next(data));
    });
  }

  public changeLed(led: LedEvent): void {
    this.socket.emit(GpioEventTypes.LED, led);
  }

  public onLaser(): Observable<LaserEvent> {
    return new Observable<LedEvent>(observer => {
      this.socket.on(GpioEventTypes.LASER, (data) => observer.next(data));
    });
  }

  public changeLaser(laser: LaserEvent): void {
    this.socket.emit(GpioEventTypes.LASER, laser);
  }

  public onRGB(): Observable<RgbEvent> {
    return new Observable<RgbEvent>(observer => {
      this.socket.on(GpioEventTypes.RGB, (data) => observer.next(data));
    });
  }

  public changeRGB(rgb: RgbEvent): void {
    this.socket.emit(GpioEventTypes.RGB, rgb);
  }

  public onTemperature(): Observable<TemperatureEvent> {
    return new Observable<TemperatureEvent>(observer => {
      this.socket.on(GpioEventTypes.TEMPERATURE, (data) => observer.next(data));
    });
  }


}
